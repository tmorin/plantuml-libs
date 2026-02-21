# Sourcehut


```text
simpleicons/S/Sourcehut
```

```text
include('simpleicons/S/Sourcehut')
```



| Illustration | Sourcehut |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sourcehut.png) | ![illustration for Sourcehut](../../simpleicons/S/Sourcehut.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SourcehutXs>`
- `<$SourcehutSm>`
- `<$SourcehutMd>`
- `<$SourcehutLg>`





## Sourcehut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sourcehut
include('simpleicons/S/Sourcehut')

' renders the element
Sourcehut('Sourcehut', 'Sourcehut', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sourcehut
include('simpleicons/S/Sourcehut')

' renders the element
Sourcehut('Sourcehut', 'Sourcehut', 'an optional tech label', 'an optional description')
@enduml
```

