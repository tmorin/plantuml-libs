# Bbciplayer


```text
simpleicons-8/B/Bbciplayer
```

```text
include('simpleicons-8/B/Bbciplayer')
```



| Illustration | Bbciplayer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bbciplayer.png) | ![illustration for Bbciplayer](../../simpleicons-8/B/Bbciplayer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BbciplayerXs>`
- `<$BbciplayerSm>`
- `<$BbciplayerMd>`
- `<$BbciplayerLg>`





## Bbciplayer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bbciplayer
include('simpleicons-8/B/Bbciplayer')

' renders the element
Bbciplayer('Bbciplayer', 'Bbciplayer', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bbciplayer
include('simpleicons-8/B/Bbciplayer')

' renders the element
Bbciplayer('Bbciplayer', 'Bbciplayer', 'an optional tech label', 'an optional description')
@enduml
```

