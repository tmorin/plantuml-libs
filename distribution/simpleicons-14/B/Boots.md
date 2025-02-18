# Boots


```text
simpleicons-14/B/Boots
```

```text
include('simpleicons-14/B/Boots')
```



| Illustration | Boots |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Boots.png) | ![illustration for Boots](../../simpleicons-14/B/Boots.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BootsXs>`
- `<$BootsSm>`
- `<$BootsMd>`
- `<$BootsLg>`





## Boots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Boots
include('simpleicons-14/B/Boots')

' renders the element
Boots('Boots', 'Boots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boots
include('simpleicons-14/B/Boots')

' renders the element
Boots('Boots', 'Boots', 'an optional tech label', 'an optional description')
@enduml
```

