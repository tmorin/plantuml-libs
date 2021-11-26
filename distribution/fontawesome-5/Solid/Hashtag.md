# Hashtag


```text
fontawesome-5/Solid/Hashtag
```

```text
include('fontawesome-5/Solid/Hashtag')
```



| Illustration | Hashtag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hashtag.png) | ![illustration for Hashtag](../../fontawesome-5/Solid/Hashtag.Local.png) |




## Hashtag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hashtag
include('fontawesome-5/Solid/Hashtag')

' renders the element
Hashtag('Hashtag', 'Hashtag', 'an optional tech label')
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

' loads the Item which embeds the element Hashtag
include('fontawesome-5/Solid/Hashtag')

' renders the element
Hashtag('Hashtag', 'Hashtag', 'an optional tech label')
@enduml
```

