# Autoit


```text
simpleicons/A/Autoit
```

```text
include('simpleicons/A/Autoit')
```



| Illustration | Autoit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Autoit.png) | ![illustration for Autoit](../../simpleicons/A/Autoit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoitXs>`
- `<$AutoitSm>`
- `<$AutoitMd>`
- `<$AutoitLg>`





## Autoit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autoit
include('simpleicons/A/Autoit')

' renders the element
Autoit('Autoit', 'Autoit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autoit
include('simpleicons/A/Autoit')

' renders the element
Autoit('Autoit', 'Autoit', 'an optional tech label', 'an optional description')
@enduml
```

