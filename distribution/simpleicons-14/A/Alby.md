# Alby


```text
simpleicons-14/A/Alby
```

```text
include('simpleicons-14/A/Alby')
```



| Illustration | Alby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alby.png) | ![illustration for Alby](../../simpleicons-14/A/Alby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlbyXs>`
- `<$AlbySm>`
- `<$AlbyMd>`
- `<$AlbyLg>`





## Alby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alby
include('simpleicons-14/A/Alby')

' renders the element
Alby('Alby', 'Alby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alby
include('simpleicons-14/A/Alby')

' renders the element
Alby('Alby', 'Alby', 'an optional tech label', 'an optional description')
@enduml
```

