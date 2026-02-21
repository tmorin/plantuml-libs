# Chakraui


```text
simpleicons/C/Chakraui
```

```text
include('simpleicons/C/Chakraui')
```



| Illustration | Chakraui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chakraui.png) | ![illustration for Chakraui](../../simpleicons/C/Chakraui.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chakraui
include('simpleicons/C/Chakraui')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chakraui
include('simpleicons/C/Chakraui')

' renders the element
Chakraui('Chakraui', 'Chakraui', 'an optional tech label', 'an optional description')
@enduml
```

