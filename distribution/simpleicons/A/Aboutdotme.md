# Aboutdotme


```text
simpleicons/A/Aboutdotme
```

```text
include('simpleicons/A/Aboutdotme')
```



| Illustration | Aboutdotme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Aboutdotme.png) | ![illustration for Aboutdotme](../../simpleicons/A/Aboutdotme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AboutdotmeXs>`
- `<$AboutdotmeSm>`
- `<$AboutdotmeMd>`
- `<$AboutdotmeLg>`





## Aboutdotme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aboutdotme
include('simpleicons/A/Aboutdotme')

' renders the element
Aboutdotme('Aboutdotme', 'Aboutdotme', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aboutdotme
include('simpleicons/A/Aboutdotme')

' renders the element
Aboutdotme('Aboutdotme', 'Aboutdotme', 'an optional tech label', 'an optional description')
@enduml
```

