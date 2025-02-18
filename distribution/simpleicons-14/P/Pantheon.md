# Pantheon


```text
simpleicons-14/P/Pantheon
```

```text
include('simpleicons-14/P/Pantheon')
```



| Illustration | Pantheon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pantheon.png) | ![illustration for Pantheon](../../simpleicons-14/P/Pantheon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PantheonXs>`
- `<$PantheonSm>`
- `<$PantheonMd>`
- `<$PantheonLg>`





## Pantheon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pantheon
include('simpleicons-14/P/Pantheon')

' renders the element
Pantheon('Pantheon', 'Pantheon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pantheon
include('simpleicons-14/P/Pantheon')

' renders the element
Pantheon('Pantheon', 'Pantheon', 'an optional tech label', 'an optional description')
@enduml
```

