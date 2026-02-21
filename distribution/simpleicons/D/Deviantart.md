# Deviantart


```text
simpleicons/D/Deviantart
```

```text
include('simpleicons/D/Deviantart')
```



| Illustration | Deviantart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Deviantart.png) | ![illustration for Deviantart](../../simpleicons/D/Deviantart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeviantartXs>`
- `<$DeviantartSm>`
- `<$DeviantartMd>`
- `<$DeviantartLg>`





## Deviantart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deviantart
include('simpleicons/D/Deviantart')

' renders the element
Deviantart('Deviantart', 'Deviantart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deviantart
include('simpleicons/D/Deviantart')

' renders the element
Deviantart('Deviantart', 'Deviantart', 'an optional tech label', 'an optional description')
@enduml
```

