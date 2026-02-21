# Spring


```text
simpleicons/S/Spring
```

```text
include('simpleicons/S/Spring')
```



| Illustration | Spring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spring.png) | ![illustration for Spring](../../simpleicons/S/Spring.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpringXs>`
- `<$SpringSm>`
- `<$SpringMd>`
- `<$SpringLg>`





## Spring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spring
include('simpleicons/S/Spring')

' renders the element
Spring('Spring', 'Spring', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spring
include('simpleicons/S/Spring')

' renders the element
Spring('Spring', 'Spring', 'an optional tech label', 'an optional description')
@enduml
```

