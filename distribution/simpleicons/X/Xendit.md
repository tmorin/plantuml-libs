# Xendit


```text
simpleicons/X/Xendit
```

```text
include('simpleicons/X/Xendit')
```



| Illustration | Xendit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xendit.png) | ![illustration for Xendit](../../simpleicons/X/Xendit.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xendit
include('simpleicons/X/Xendit')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xendit
include('simpleicons/X/Xendit')

' renders the element
Xendit('Xendit', 'Xendit', 'an optional tech label', 'an optional description')
@enduml
```

