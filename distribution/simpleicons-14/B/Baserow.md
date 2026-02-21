# Baserow


```text
simpleicons-14/B/Baserow
```

```text
include('simpleicons-14/B/Baserow')
```



| Illustration | Baserow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Baserow.png) | ![illustration for Baserow](../../simpleicons-14/B/Baserow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaserowXs>`
- `<$BaserowSm>`
- `<$BaserowMd>`
- `<$BaserowLg>`





## Baserow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Baserow
include('simpleicons-14/B/Baserow')

' renders the element
Baserow('Baserow', 'Baserow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baserow
include('simpleicons-14/B/Baserow')

' renders the element
Baserow('Baserow', 'Baserow', 'an optional tech label', 'an optional description')
@enduml
```

