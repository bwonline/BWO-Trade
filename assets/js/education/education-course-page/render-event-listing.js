const date = document.getElementById("courseDateComponent");

let eventCourseInfo;
let eventLocationInfo;

if (!courseDates.length) {
  date.innerHTML = `<h3 style="text-align:center">There are currently no dates available for this course. Please check back later</h3>`;
}

courseDates.forEach((item) => {
  eventCourseInfo = courses[item.course];
  eventLocationInfo = facilites[item.location];

  let courseMonth = item.date.toLocaleString("default", { month: "long" });
  let courseMonthNum = item.date.getMonth() + 1;
  courseMonthNum = "0" + courseMonthNum;
  courseMonthNum = courseMonthNum.slice(-2);
  let courseDay = item.date.getDate();
  courseDay = "0" + courseDay;
  courseDay = courseDay.slice(-2);
  let courseYear = item.date.getFullYear();
  let courseName = courses[item.course].title;
  let courseURL = courses[item.course].url;
  let courseDescription = courses[item.course].description;
  let courseWeekday = item.date.toLocaleString("default", {
    weekday: "long",
  });
  let courseCity = facilites[item.location].city;
  let courseVenue = facilites[item.location].venue;
  let courseID = `${item.location}${item.course}${courseDay}${courseMonthNum}${courseYear}`;

  let eventHTML = `
      <div class="container eventBlock">
        <div class="row">
            <div class="col-xs-3">
                <div class="eventContent eventCalendar">
                    <div class="fs-1_3 cal-mon">${courseMonth}</div>
                    <div class="cal-day">${courseDay}</div>
                    <div class="fs-1_3 cal-year">${courseYear}</div>
                </div>
            </div>
            <div class="col-md-6 col-xs-9">
                <div class="eventContent eventInfo">
                    <div class="lh-1_5 fs-1_3 courseTitle"><b>${courseName}</b></div>
                    <div class="lh-1_5 fs-1_3 courseTime">${courseWeekday} (9:30am - 5:00pm)</div>
                    <div class="lh-1_5 fs-1_3 courseFacility">
                        <a href="#${courseCity.toLowerCase()}Facility">${courseVenue}</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-xs-12">
                <div class="eventContent eventBooking">
                    <div class="row">
                        <div class="col-md-12 col-xs-6">
                            <a
                            href="mailto:trade@beautyworks.co.uk?subject=${courseName} - ${courseCity} - ${courseDay} ${courseMonth} ${courseYear}"
                            >
                                <div class="eventBtn fs-1_3">
                                    <i class="fa fa-envelope" aria-hidden="true"></i> Book by Email
                                </div>
                            </a>
                        </div>
                        <div class="col-md-12 col-xs-6">
                            <a href="tel:01614853602">
                                <div class="eventBtn fs-1_3">
                                    <i class="fa fa-phone" aria-hidden="true"></i> Book by Phone
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    `;

  let li = document.createElement("li");
  li.setAttribute("id", `${courseID}`);
  li.setAttribute("class", "courseItem");
  li.innerHTML = eventHTML;
  date.appendChild(li);

  expireListing(document.getElementById(`${courseID}`), item.date);
});
