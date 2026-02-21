# Googlestreetview


```text
simpleicons/G/Googlestreetview
```

```text
include('simpleicons/G/Googlestreetview')
```



| Illustration | Googlestreetview |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlestreetview.png) | ![illustration for Googlestreetview](../../simpleicons/G/Googlestreetview.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglestreetviewXs>`
- `<$GooglestreetviewSm>`
- `<$GooglestreetviewMd>`
- `<$GooglestreetviewLg>`





## Googlestreetview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlestreetview
include('simpleicons/G/Googlestreetview')

' renders the element
Googlestreetview('Googlestreetview', 'Googlestreetview', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlestreetview
include('simpleicons/G/Googlestreetview')

' renders the element
Googlestreetview('Googlestreetview', 'Googlestreetview', 'an optional tech label', 'an optional description')
@enduml
```

