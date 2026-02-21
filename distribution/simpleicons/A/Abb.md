# Abb


```text
simpleicons/A/Abb
```

```text
include('simpleicons/A/Abb')
```



| Illustration | Abb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Abb.png) | ![illustration for Abb](../../simpleicons/A/Abb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbbXs>`
- `<$AbbSm>`
- `<$AbbMd>`
- `<$AbbLg>`





## Abb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Abb
include('simpleicons/A/Abb')

' renders the element
Abb('Abb', 'Abb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abb
include('simpleicons/A/Abb')

' renders the element
Abb('Abb', 'Abb', 'an optional tech label', 'an optional description')
@enduml
```

