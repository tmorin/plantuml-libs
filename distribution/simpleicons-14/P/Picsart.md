# Picsart


```text
simpleicons-14/P/Picsart
```

```text
include('simpleicons-14/P/Picsart')
```



| Illustration | Picsart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Picsart.png) | ![illustration for Picsart](../../simpleicons-14/P/Picsart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PicsartXs>`
- `<$PicsartSm>`
- `<$PicsartMd>`
- `<$PicsartLg>`





## Picsart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Picsart
include('simpleicons-14/P/Picsart')

' renders the element
Picsart('Picsart', 'Picsart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Picsart
include('simpleicons-14/P/Picsart')

' renders the element
Picsart('Picsart', 'Picsart', 'an optional tech label', 'an optional description')
@enduml
```

