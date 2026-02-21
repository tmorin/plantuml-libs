# Paperlessngx


```text
simpleicons-14/P/Paperlessngx
```

```text
include('simpleicons-14/P/Paperlessngx')
```



| Illustration | Paperlessngx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Paperlessngx.png) | ![illustration for Paperlessngx](../../simpleicons-14/P/Paperlessngx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaperlessngxXs>`
- `<$PaperlessngxSm>`
- `<$PaperlessngxMd>`
- `<$PaperlessngxLg>`





## Paperlessngx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Paperlessngx
include('simpleicons-14/P/Paperlessngx')

' renders the element
Paperlessngx('Paperlessngx', 'Paperlessngx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paperlessngx
include('simpleicons-14/P/Paperlessngx')

' renders the element
Paperlessngx('Paperlessngx', 'Paperlessngx', 'an optional tech label', 'an optional description')
@enduml
```

