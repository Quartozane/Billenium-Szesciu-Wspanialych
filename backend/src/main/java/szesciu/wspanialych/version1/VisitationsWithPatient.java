package szesciu.wspanialych.version1;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class VisitationsWithPatient {
    private User patient;
    private Visitations visitations;
}
