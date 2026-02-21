# Asahilinux


```text
simpleicons-14/A/Asahilinux
```

```text
include('simpleicons-14/A/Asahilinux')
```



| Illustration | Asahilinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Asahilinux.png) | ![illustration for Asahilinux](../../simpleicons-14/A/Asahilinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsahilinuxXs>`
- `<$AsahilinuxSm>`
- `<$AsahilinuxMd>`
- `<$AsahilinuxLg>`





## Asahilinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Asahilinux
include('simpleicons-14/A/Asahilinux')

' renders the element
Asahilinux('Asahilinux', 'Asahilinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Asahilinux
include('simpleicons-14/A/Asahilinux')

' renders the element
Asahilinux('Asahilinux', 'Asahilinux', 'an optional tech label', 'an optional description')
@enduml
```

