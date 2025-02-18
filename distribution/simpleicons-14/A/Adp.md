# Adp


```text
simpleicons-14/A/Adp
```

```text
include('simpleicons-14/A/Adp')
```



| Illustration | Adp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adp.png) | ![illustration for Adp](../../simpleicons-14/A/Adp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdpXs>`
- `<$AdpSm>`
- `<$AdpMd>`
- `<$AdpLg>`





## Adp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adp
include('simpleicons-14/A/Adp')

' renders the element
Adp('Adp', 'Adp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adp
include('simpleicons-14/A/Adp')

' renders the element
Adp('Adp', 'Adp', 'an optional tech label', 'an optional description')
@enduml
```

