# Tv


```text
fontawesome-5/Solid/Tv
```

```text
include('fontawesome-5/Solid/Tv')
```



| Illustration | Tv |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tv.png) | ![illustration for Tv](../../fontawesome-5/Solid/Tv.Local.png) |




## Tv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tv
include('fontawesome-5/Solid/Tv')

' renders the element
Tv('Tv', 'Tv', 'an optional tech label')
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

' loads the Item which embeds the element Tv
include('fontawesome-5/Solid/Tv')

' renders the element
Tv('Tv', 'Tv', 'an optional tech label')
@enduml
```

