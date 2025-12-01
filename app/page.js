"use client";
import React, { useState } from "react";

const slides = [
  "hero",
  "comparison",
  "breakdown",
  "process",
  "qualitative",
  "context",
];

export default function CaseStudyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const baseStyles = {
    fontFamily:
      "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#FAFAFA",
    minHeight: "100vh",
    padding: "24px",
  };

  const cardStyles = {
    width: "1080px",
    height: "1080px",
    backgroundColor: "#FFFFFF",
    borderRadius: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    overflow: "hidden",
  };

  const accentColor = "#0A0A0A";
  const mutedColor = "#71717A";
  const lightGray = "#E4E4E7";
  const brandGreen = "#10B981";

  // Slide 1: Hero Stat
  const HeroSlide = () => (
    <div style={cardStyles}>
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "60px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: brandGreen,
            borderRadius: "6px",
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: accentColor,
            letterSpacing: "-0.02em",
          }}
        >
          GradeInstant
        </span>
      </div>

      <div style={{ textAlign: "center", padding: "0 80px" }}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: mutedColor,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Case Study Results
        </p>

        <h1
          style={{
            fontSize: "240px",
            fontWeight: "700",
            color: accentColor,
            lineHeight: "0.9",
            letterSpacing: "-0.04em",
            margin: "0",
          }}
        >
          95.8<span style={{ fontSize: "120px" }}>%</span>
        </h1>

        <p
          style={{
            fontSize: "32px",
            fontWeight: "400",
            color: accentColor,
            marginTop: "40px",
            letterSpacing: "-0.02em",
          }}
        >
          reduction in grading time
        </p>

        <div
          style={{
            marginTop: "80px",
            display: "flex",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              color: mutedColor,
              padding: "8px 16px",
              backgroundColor: "#F4F4F5",
              borderRadius: "4px",
            }}
          >
            50 Python assignments
          </span>
          <span
            style={{
              fontSize: "15px",
              color: mutedColor,
              padding: "8px 16px",
              backgroundColor: "#F4F4F5",
              borderRadius: "4px",
            }}
          >
            CS101 Study
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "60px",
          fontSize: "14px",
          color: mutedColor,
        }}
      >
        1 / 6
      </div>
    </div>
  );

  // Slide 2: Before/After Comparison
  const ComparisonSlide = () => (
    <div style={cardStyles}>
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "60px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: brandGreen,
            borderRadius: "6px",
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: accentColor,
            letterSpacing: "-0.02em",
          }}
        >
          GradeInstant
        </span>
      </div>

      <div style={{ width: "100%", padding: "0 80px" }}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: mutedColor,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "60px",
          }}
        >
          Time Comparison
        </p>

        {/* Manual Bar */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: accentColor,
              }}
            >
              Manual Grading
            </span>
            <span
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: accentColor,
                letterSpacing: "-0.03em",
              }}
            >
              7h 55m
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "64px",
              backgroundColor: "#D4D4D8",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* GradeInstant Bar */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: accentColor,
              }}
            >
              With GradeInstant
            </span>
            <span
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: brandGreen,
                letterSpacing: "-0.03em",
              }}
            >
              20m
            </span>
          </div>
          <div
            style={{
              width: "4.2%",
              height: "64px",
              backgroundColor: brandGreen,
              borderRadius: "4px",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "80px",
            padding: "32px",
            backgroundColor: "#F4F4F5",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: mutedColor,
            }}
          >
            Time saved per batch:{" "}
            <strong style={{ color: accentColor }}>7 hours 35 minutes</strong>
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "60px",
          fontSize: "14px",
          color: mutedColor,
        }}
      >
        2 / 6
      </div>
    </div>
  );

  // Slide 3: Time Breakdown
  const BreakdownSlide = () => {
    const tasks = [
      { name: "Code Review & Execution", time: 3, width: "31.6%" },
      { name: "Logic & Style Evaluation", time: 2, width: "21%" },
      { name: "AI/Plagiarism Check", time: 1.5, width: "15.8%" },
      { name: "Writing Feedback", time: 2.5, width: "26.3%" },
      { name: "LMS Grade Entry", time: 0.5, width: "5.3%" },
    ];

    const colors = ["#18181B", "#3F3F46", "#52525B", "#71717A", "#A1A1AA"];

    return (
      <div style={cardStyles}>
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: brandGreen,
              borderRadius: "6px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: accentColor,
              letterSpacing: "-0.02em",
            }}
          >
            GradeInstant
          </span>
        </div>

        <div style={{ width: "100%", padding: "0 80px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: mutedColor,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Where Manual Grading Time Goes
          </p>

          <p
            style={{
              fontSize: "24px",
              color: accentColor,
              marginBottom: "60px",
              fontWeight: "400",
            }}
          >
            Average <strong>9.5 minutes</strong> per assignment
          </p>

          {/* Stacked bar */}
          <div
            style={{
              display: "flex",
              height: "80px",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "48px",
            }}
          >
            {tasks.map((task, i) => (
              <div
                key={i}
                style={{
                  width: task.width,
                  backgroundColor: colors[i],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {task.time}m
                </span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {tasks.map((task, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: colors[i],
                      borderRadius: "3px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "18px",
                      color: accentColor,
                    }}
                  >
                    {task.name}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: accentColor,
                  }}
                >
                  {task.time} min
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            fontSize: "14px",
            color: mutedColor,
          }}
        >
          3 / 6
        </div>
      </div>
    );
  };

  // Slide 4: Process Comparison
  const ProcessSlide = () => {
    const manualSteps = [
      "Open code files & run program",
      "Verify across test cases",
      "Review logic & coding style",
      "Check for AI/plagiarism",
      "Write individual feedback",
      "Record grades in LMS",
    ];

    const autoSteps = [
      "Upload submissions",
      "Review flagged outliers",
      "Export grades",
    ];

    return (
      <div style={cardStyles}>
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: brandGreen,
              borderRadius: "6px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: accentColor,
              letterSpacing: "-0.02em",
            }}
          >
            GradeInstant
          </span>
        </div>

        <div style={{ width: "100%", padding: "0 80px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: mutedColor,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "60px",
            }}
          >
            Process Comparison
          </p>

          <div style={{ display: "flex", gap: "60px" }}>
            {/* Manual Column */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: accentColor,
                  marginBottom: "32px",
                  paddingBottom: "16px",
                  borderBottom: `2px solid ${lightGray}`,
                }}
              >
                Manual
              </h3>

              {manualSteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: "#E4E4E7",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: mutedColor,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: accentColor,
                      lineHeight: "28px",
                    }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                width: "1px",
                backgroundColor: lightGray,
              }}
            />

            {/* GradeInstant Column */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: brandGreen,
                  marginBottom: "32px",
                  paddingBottom: "16px",
                  borderBottom: `2px solid ${brandGreen}`,
                }}
              >
                GradeInstant
              </h3>

              {autoSteps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      backgroundColor: brandGreen,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#FFF",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: accentColor,
                      lineHeight: "28px",
                    }}
                  >
                    {step}
                  </span>
                </div>
              ))}

              <div
                style={{
                  marginTop: "40px",
                  padding: "24px",
                  backgroundColor: "#ECFDF5",
                  borderRadius: "8px",
                  borderLeft: `4px solid ${brandGreen}`,
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    color: "#065F46",
                  }}
                >
                  6 steps → 3 steps
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            fontSize: "14px",
            color: mutedColor,
          }}
        >
          4 / 6
        </div>
      </div>
    );
  };

  // Slide 5: Qualitative Findings
  const QualitativeSlide = () => {
    const findings = [
      "Improved consistency in grading",
      "Reduced cognitive fatigue",
      "More accurate detection of students who didn't understand their code",
      "Higher confidence in academic integrity",
    ];

    return (
      <div style={cardStyles}>
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: brandGreen,
              borderRadius: "6px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: accentColor,
              letterSpacing: "-0.02em",
            }}
          >
            GradeInstant
          </span>
        </div>

        <div style={{ width: "100%", padding: "0 100px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: mutedColor,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "60px",
            }}
          >
            Beyond the Numbers
          </p>

          <p
            style={{
              fontSize: "28px",
              color: accentColor,
              marginBottom: "60px",
              lineHeight: "1.5",
              fontWeight: "400",
            }}
          >
            Instructors reported qualitative improvements that numbers alone
            don't capture:
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {findings.map((finding, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: "28px 32px",
                  backgroundColor: "#F4F4F5",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: brandGreen,
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "22px",
                    color: accentColor,
                    fontWeight: "400",
                  }}
                >
                  {finding}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            fontSize: "14px",
            color: mutedColor,
          }}
        >
          5 / 6
        </div>
      </div>
    );
  };

  // Slide 6: Study Context
  const ContextSlide = () => {
    const details = [
      { label: "Course", value: "CS101 – Introduction to Programming" },
      { label: "Topic", value: "Python Loops" },
      { label: "Submissions", value: "50 student assignments" },
      { label: "Instructor", value: "Senior Lecturer, 8 years experience" },
      { label: "Institution", value: "Mid-sized University CS Department" },
    ];

    return (
      <div style={cardStyles}>
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: brandGreen,
              borderRadius: "6px",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: accentColor,
              letterSpacing: "-0.02em",
            }}
          >
            GradeInstant
          </span>
        </div>

        <div style={{ width: "100%", padding: "0 100px" }}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: mutedColor,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "60px",
            }}
          >
            Study Context
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: `1px solid ${lightGray}`,
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {details.map((detail, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 32px",
                  borderBottom:
                    i < details.length - 1 ? `1px solid ${lightGray}` : "none",
                  backgroundColor: i % 2 === 0 ? "#FAFAFA" : "#FFFFFF",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: mutedColor,
                    fontWeight: "500",
                  }}
                >
                  {detail.label}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: accentColor,
                    fontWeight: "500",
                    textAlign: "right",
                  }}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: mutedColor,
                marginBottom: "24px",
              }}
            >
              Ready to reduce your grading workload?
            </p>
            <div
              style={{
                display: "inline-block",
                padding: "16px 48px",
                backgroundColor: accentColor,
                borderRadius: "8px",
                color: "#FFF",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              gradeinstant.com
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            fontSize: "14px",
            color: mutedColor,
          }}
        >
          6 / 6
        </div>
      </div>
    );
  };

  const slideComponents = [
    <HeroSlide key="hero" />,
    <ComparisonSlide key="comparison" />,
    <BreakdownSlide key="breakdown" />,
    <ProcessSlide key="process" />,
    <QualitativeSlide key="qualitative" />,
    <ContextSlide key="context" />,
  ];

  return (
    <div style={baseStyles}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: accentColor,
            marginBottom: "8px",
          }}
        >
          GradeInstant Case Study Carousel
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: mutedColor,
          }}
        >
          6 slides optimized for LinkedIn (1080×1080px)
        </p>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          maxWidth: "1200px",
          margin: "0 auto 24px",
        }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide}
            onClick={() => setCurrentSlide(i)}
            style={{
              padding: "12px 20px",
              backgroundColor: currentSlide === i ? accentColor : "#E4E4E7",
              color: currentSlide === i ? "#FFF" : accentColor,
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {slide}
          </button>
        ))}
      </div>

      {/* Slide Display */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        {slideComponents[currentSlide]}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "24px",
          fontSize: "14px",
          color: mutedColor,
        }}
      >
        Right-click each slide → "Save image" or screenshot at 1080×1080
      </p>
    </div>
  );
}
