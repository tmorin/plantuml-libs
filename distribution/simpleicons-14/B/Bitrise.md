# Bitrise


```text
simpleicons-14/B/Bitrise
```

```text
include('simpleicons-14/B/Bitrise')
```



| Illustration | Bitrise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bitrise.png) | ![illustration for Bitrise](../../simpleicons-14/B/Bitrise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitriseXs>`
- `<$BitriseSm>`
- `<$BitriseMd>`
- `<$BitriseLg>`





## Bitrise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bitrise
include('simpleicons-14/B/Bitrise')

' renders the element
Bitrise('Bitrise', 'Bitrise', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitrise
include('simpleicons-14/B/Bitrise')

' renders the element
Bitrise('Bitrise', 'Bitrise', 'an optional tech label', 'an optional description')
@enduml
```

