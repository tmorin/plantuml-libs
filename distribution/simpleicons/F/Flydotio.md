# Flydotio


```text
simpleicons/F/Flydotio
```

```text
include('simpleicons/F/Flydotio')
```



| Illustration | Flydotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flydotio.png) | ![illustration for Flydotio](../../simpleicons/F/Flydotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlydotioXs>`
- `<$FlydotioSm>`
- `<$FlydotioMd>`
- `<$FlydotioLg>`





## Flydotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flydotio
include('simpleicons/F/Flydotio')

' renders the element
Flydotio('Flydotio', 'Flydotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flydotio
include('simpleicons/F/Flydotio')

' renders the element
Flydotio('Flydotio', 'Flydotio', 'an optional tech label', 'an optional description')
@enduml
```

