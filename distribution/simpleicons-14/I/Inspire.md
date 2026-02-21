# Inspire


```text
simpleicons-14/I/Inspire
```

```text
include('simpleicons-14/I/Inspire')
```



| Illustration | Inspire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Inspire.png) | ![illustration for Inspire](../../simpleicons-14/I/Inspire.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InspireXs>`
- `<$InspireSm>`
- `<$InspireMd>`
- `<$InspireLg>`





## Inspire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Inspire
include('simpleicons-14/I/Inspire')

' renders the element
Inspire('Inspire', 'Inspire', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Inspire
include('simpleicons-14/I/Inspire')

' renders the element
Inspire('Inspire', 'Inspire', 'an optional tech label', 'an optional description')
@enduml
```

