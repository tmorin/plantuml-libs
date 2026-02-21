# Credly


```text
simpleicons/C/Credly
```

```text
include('simpleicons/C/Credly')
```



| Illustration | Credly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Credly.png) | ![illustration for Credly](../../simpleicons/C/Credly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CredlyXs>`
- `<$CredlySm>`
- `<$CredlyMd>`
- `<$CredlyLg>`





## Credly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Credly
include('simpleicons/C/Credly')

' renders the element
Credly('Credly', 'Credly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Credly
include('simpleicons/C/Credly')

' renders the element
Credly('Credly', 'Credly', 'an optional tech label', 'an optional description')
@enduml
```

