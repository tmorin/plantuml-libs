# Docsify


```text
simpleicons/D/Docsify
```

```text
include('simpleicons/D/Docsify')
```



| Illustration | Docsify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Docsify.png) | ![illustration for Docsify](../../simpleicons/D/Docsify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DocsifyXs>`
- `<$DocsifySm>`
- `<$DocsifyMd>`
- `<$DocsifyLg>`





## Docsify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Docsify
include('simpleicons/D/Docsify')

' renders the element
Docsify('Docsify', 'Docsify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Docsify
include('simpleicons/D/Docsify')

' renders the element
Docsify('Docsify', 'Docsify', 'an optional tech label', 'an optional description')
@enduml
```

