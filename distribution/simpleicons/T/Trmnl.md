# Trmnl


```text
simpleicons/T/Trmnl
```

```text
include('simpleicons/T/Trmnl')
```



| Illustration | Trmnl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trmnl.png) | ![illustration for Trmnl](../../simpleicons/T/Trmnl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrmnlXs>`
- `<$TrmnlSm>`
- `<$TrmnlMd>`
- `<$TrmnlLg>`





## Trmnl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trmnl
include('simpleicons/T/Trmnl')

' renders the element
Trmnl('Trmnl', 'Trmnl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trmnl
include('simpleicons/T/Trmnl')

' renders the element
Trmnl('Trmnl', 'Trmnl', 'an optional tech label', 'an optional description')
@enduml
```

