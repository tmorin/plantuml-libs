# ArrowsToCircle


```text
fontawesome-6/Solid/ArrowsToCircle
```

```text
include('fontawesome-6/Solid/ArrowsToCircle')
```



| Illustration | ArrowsToCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsToCircle.png) | ![illustration for ArrowsToCircle](../../fontawesome-6/Solid/ArrowsToCircle.Local.png) |




## ArrowsToCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsToCircle
include('fontawesome-6/Solid/ArrowsToCircle')

' renders the element
ArrowsToCircle('ArrowsToCircle', 'Arrows To Circle', 'an optional tech label')
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

' loads the Item which embeds the element ArrowsToCircle
include('fontawesome-6/Solid/ArrowsToCircle')

' renders the element
ArrowsToCircle('ArrowsToCircle', 'Arrows To Circle', 'an optional tech label')
@enduml
```

