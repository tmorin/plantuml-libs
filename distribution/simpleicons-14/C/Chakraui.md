# Chakraui


```text
simpleicons-14/C/Chakraui
```

```text
include('simpleicons-14/C/Chakraui')
```



| Illustration | Chakraui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chakraui.png) | ![illustration for Chakraui](../../simpleicons-14/C/Chakraui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChakrauiXs>`
- `<$ChakrauiSm>`
- `<$ChakrauiMd>`
- `<$ChakrauiLg>`





## Chakraui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chakraui
include('simpleicons-14/C/Chakraui')

' renders the element
Chakraui('Chakraui', 'Chakraui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chakraui
include('simpleicons-14/C/Chakraui')

' renders the element
Chakraui('Chakraui', 'Chakraui', 'an optional tech label', 'an optional description')
@enduml
```

