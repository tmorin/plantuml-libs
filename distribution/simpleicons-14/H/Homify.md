# Homify


```text
simpleicons-14/H/Homify
```

```text
include('simpleicons-14/H/Homify')
```



| Illustration | Homify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Homify.png) | ![illustration for Homify](../../simpleicons-14/H/Homify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomifyXs>`
- `<$HomifySm>`
- `<$HomifyMd>`
- `<$HomifyLg>`





## Homify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Homify
include('simpleicons-14/H/Homify')

' renders the element
Homify('Homify', 'Homify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homify
include('simpleicons-14/H/Homify')

' renders the element
Homify('Homify', 'Homify', 'an optional tech label', 'an optional description')
@enduml
```

