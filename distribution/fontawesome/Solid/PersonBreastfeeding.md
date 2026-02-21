# PersonBreastfeeding


```text
fontawesome/Solid/PersonBreastfeeding
```

```text
include('fontawesome/Solid/PersonBreastfeeding')
```



| Illustration | PersonBreastfeeding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonBreastfeeding.png) | ![illustration for PersonBreastfeeding](../../fontawesome/Solid/PersonBreastfeeding.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonBreastfeedingXs>`
- `<$PersonBreastfeedingSm>`
- `<$PersonBreastfeedingMd>`
- `<$PersonBreastfeedingLg>`





## PersonBreastfeeding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonBreastfeeding
include('fontawesome/Solid/PersonBreastfeeding')

' renders the element
PersonBreastfeeding('PersonBreastfeeding', 'Person Breastfeeding', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonBreastfeeding
include('fontawesome/Solid/PersonBreastfeeding')

' renders the element
PersonBreastfeeding('PersonBreastfeeding', 'Person Breastfeeding', 'an optional tech label', 'an optional description')
@enduml
```

