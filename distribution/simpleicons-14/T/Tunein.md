# Tunein


```text
simpleicons-14/T/Tunein
```

```text
include('simpleicons-14/T/Tunein')
```



| Illustration | Tunein |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tunein.png) | ![illustration for Tunein](../../simpleicons-14/T/Tunein.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TuneinXs>`
- `<$TuneinSm>`
- `<$TuneinMd>`
- `<$TuneinLg>`





## Tunein

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tunein
include('simpleicons-14/T/Tunein')

' renders the element
Tunein('Tunein', 'Tunein', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tunein
include('simpleicons-14/T/Tunein')

' renders the element
Tunein('Tunein', 'Tunein', 'an optional tech label', 'an optional description')
@enduml
```

