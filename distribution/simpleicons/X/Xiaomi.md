# Xiaomi


```text
simpleicons/X/Xiaomi
```

```text
include('simpleicons/X/Xiaomi')
```



| Illustration | Xiaomi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xiaomi.png) | ![illustration for Xiaomi](../../simpleicons/X/Xiaomi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XiaomiXs>`
- `<$XiaomiSm>`
- `<$XiaomiMd>`
- `<$XiaomiLg>`





## Xiaomi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xiaomi
include('simpleicons/X/Xiaomi')

' renders the element
Xiaomi('Xiaomi', 'Xiaomi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xiaomi
include('simpleicons/X/Xiaomi')

' renders the element
Xiaomi('Xiaomi', 'Xiaomi', 'an optional tech label', 'an optional description')
@enduml
```

