# Xendit


```text
simpleicons-14/X/Xendit
```

```text
include('simpleicons-14/X/Xendit')
```



| Illustration | Xendit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/X/Xendit.png) | ![illustration for Xendit](../../simpleicons-14/X/Xendit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XenditXs>`
- `<$XenditSm>`
- `<$XenditMd>`
- `<$XenditLg>`





## Xendit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Xendit
include('simpleicons-14/X/Xendit')

' renders the element
Xendit('Xendit', 'Xendit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xendit
include('simpleicons-14/X/Xendit')

' renders the element
Xendit('Xendit', 'Xendit', 'an optional tech label', 'an optional description')
@enduml
```

