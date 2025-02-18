# Shazam


```text
simpleicons-14/S/Shazam
```

```text
include('simpleicons-14/S/Shazam')
```



| Illustration | Shazam |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Shazam.png) | ![illustration for Shazam](../../simpleicons-14/S/Shazam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShazamXs>`
- `<$ShazamSm>`
- `<$ShazamMd>`
- `<$ShazamLg>`





## Shazam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Shazam
include('simpleicons-14/S/Shazam')

' renders the element
Shazam('Shazam', 'Shazam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shazam
include('simpleicons-14/S/Shazam')

' renders the element
Shazam('Shazam', 'Shazam', 'an optional tech label', 'an optional description')
@enduml
```

