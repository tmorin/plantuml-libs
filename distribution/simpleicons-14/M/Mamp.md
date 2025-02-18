# Mamp


```text
simpleicons-14/M/Mamp
```

```text
include('simpleicons-14/M/Mamp')
```



| Illustration | Mamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mamp.png) | ![illustration for Mamp](../../simpleicons-14/M/Mamp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MampXs>`
- `<$MampSm>`
- `<$MampMd>`
- `<$MampLg>`





## Mamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mamp
include('simpleicons-14/M/Mamp')

' renders the element
Mamp('Mamp', 'Mamp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mamp
include('simpleicons-14/M/Mamp')

' renders the element
Mamp('Mamp', 'Mamp', 'an optional tech label', 'an optional description')
@enduml
```

