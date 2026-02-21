# Indieweb


```text
simpleicons-14/I/Indieweb
```

```text
include('simpleicons-14/I/Indieweb')
```



| Illustration | Indieweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/I/Indieweb.png) | ![illustration for Indieweb](../../simpleicons-14/I/Indieweb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndiewebXs>`
- `<$IndiewebSm>`
- `<$IndiewebMd>`
- `<$IndiewebLg>`





## Indieweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Indieweb
include('simpleicons-14/I/Indieweb')

' renders the element
Indieweb('Indieweb', 'Indieweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Indieweb
include('simpleicons-14/I/Indieweb')

' renders the element
Indieweb('Indieweb', 'Indieweb', 'an optional tech label', 'an optional description')
@enduml
```

