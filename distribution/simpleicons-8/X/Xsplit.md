# Xsplit


```text
simpleicons-8/X/Xsplit
```

```text
include('simpleicons-8/X/Xsplit')
```



| Illustration | Xsplit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/X/Xsplit.png) | ![illustration for Xsplit](../../simpleicons-8/X/Xsplit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XsplitXs>`
- `<$XsplitSm>`
- `<$XsplitMd>`
- `<$XsplitLg>`





## Xsplit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Xsplit
include('simpleicons-8/X/Xsplit')

' renders the element
Xsplit('Xsplit', 'Xsplit', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Xsplit
include('simpleicons-8/X/Xsplit')

' renders the element
Xsplit('Xsplit', 'Xsplit', 'an optional tech label', 'an optional description')
@enduml
```

