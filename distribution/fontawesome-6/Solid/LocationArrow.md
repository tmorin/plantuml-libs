# LocationArrow


```text
fontawesome-6/Solid/LocationArrow
```

```text
include('fontawesome-6/Solid/LocationArrow')
```



| Illustration | LocationArrow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LocationArrow.png) | ![illustration for LocationArrow](../../fontawesome-6/Solid/LocationArrow.Local.png) |




## LocationArrow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LocationArrow
include('fontawesome-6/Solid/LocationArrow')

' renders the element
LocationArrow('LocationArrow', 'Location Arrow', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LocationArrow
include('fontawesome-6/Solid/LocationArrow')

' renders the element
LocationArrow('LocationArrow', 'Location Arrow', 'an optional tech label')
@enduml
```

