# Tampermonkey


```text
simpleicons-14/T/Tampermonkey
```

```text
include('simpleicons-14/T/Tampermonkey')
```



| Illustration | Tampermonkey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tampermonkey.png) | ![illustration for Tampermonkey](../../simpleicons-14/T/Tampermonkey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TampermonkeyXs>`
- `<$TampermonkeySm>`
- `<$TampermonkeyMd>`
- `<$TampermonkeyLg>`





## Tampermonkey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tampermonkey
include('simpleicons-14/T/Tampermonkey')

' renders the element
Tampermonkey('Tampermonkey', 'Tampermonkey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tampermonkey
include('simpleicons-14/T/Tampermonkey')

' renders the element
Tampermonkey('Tampermonkey', 'Tampermonkey', 'an optional tech label', 'an optional description')
@enduml
```

