# Jameson


```text
simpleicons/J/Jameson
```

```text
include('simpleicons/J/Jameson')
```



| Illustration | Jameson |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jameson.png) | ![illustration for Jameson](../../simpleicons/J/Jameson.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JamesonXs>`
- `<$JamesonSm>`
- `<$JamesonMd>`
- `<$JamesonLg>`





## Jameson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jameson
include('simpleicons/J/Jameson')

' renders the element
Jameson('Jameson', 'Jameson', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jameson
include('simpleicons/J/Jameson')

' renders the element
Jameson('Jameson', 'Jameson', 'an optional tech label', 'an optional description')
@enduml
```

