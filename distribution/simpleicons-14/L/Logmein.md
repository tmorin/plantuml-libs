# Logmein


```text
simpleicons-14/L/Logmein
```

```text
include('simpleicons-14/L/Logmein')
```



| Illustration | Logmein |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Logmein.png) | ![illustration for Logmein](../../simpleicons-14/L/Logmein.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LogmeinXs>`
- `<$LogmeinSm>`
- `<$LogmeinMd>`
- `<$LogmeinLg>`





## Logmein

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Logmein
include('simpleicons-14/L/Logmein')

' renders the element
Logmein('Logmein', 'Logmein', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Logmein
include('simpleicons-14/L/Logmein')

' renders the element
Logmein('Logmein', 'Logmein', 'an optional tech label', 'an optional description')
@enduml
```

