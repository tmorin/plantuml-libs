# Headlessui


```text
simpleicons-14/H/Headlessui
```

```text
include('simpleicons-14/H/Headlessui')
```



| Illustration | Headlessui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Headlessui.png) | ![illustration for Headlessui](../../simpleicons-14/H/Headlessui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeadlessuiXs>`
- `<$HeadlessuiSm>`
- `<$HeadlessuiMd>`
- `<$HeadlessuiLg>`





## Headlessui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Headlessui
include('simpleicons-14/H/Headlessui')

' renders the element
Headlessui('Headlessui', 'Headlessui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Headlessui
include('simpleicons-14/H/Headlessui')

' renders the element
Headlessui('Headlessui', 'Headlessui', 'an optional tech label', 'an optional description')
@enduml
```

