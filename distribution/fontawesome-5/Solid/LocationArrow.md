# LocationArrow


```text
fontawesome-5/Solid/LocationArrow
```

```text
include('fontawesome-5/Solid/LocationArrow')
```



| Illustration | LocationArrow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/LocationArrow.png) | ![illustration for LocationArrow](../../fontawesome-5/Solid/LocationArrow.Local.png) |




## LocationArrow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LocationArrow
include('fontawesome-5/Solid/LocationArrow')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element LocationArrow
include('fontawesome-5/Solid/LocationArrow')

' renders the element
LocationArrow('LocationArrow', 'Location Arrow', 'an optional tech label')
@enduml
```

