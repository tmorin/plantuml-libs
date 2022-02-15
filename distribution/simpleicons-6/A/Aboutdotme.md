# Aboutdotme


```text
simpleicons-6/A/Aboutdotme
```

```text
include('simpleicons-6/A/Aboutdotme')
```



| Illustration | Aboutdotme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aboutdotme.png) | ![illustration for Aboutdotme](../../simpleicons-6/A/Aboutdotme.Local.png) |




## Aboutdotme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aboutdotme
include('simpleicons-6/A/Aboutdotme')

' renders the element
Aboutdotme('Aboutdotme', 'Aboutdotme', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aboutdotme
include('simpleicons-6/A/Aboutdotme')

' renders the element
Aboutdotme('Aboutdotme', 'Aboutdotme', 'an optional tech label')
@enduml
```

