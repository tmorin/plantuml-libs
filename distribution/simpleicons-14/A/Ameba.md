# Ameba


```text
simpleicons-14/A/Ameba
```

```text
include('simpleicons-14/A/Ameba')
```



| Illustration | Ameba |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Ameba.png) | ![illustration for Ameba](../../simpleicons-14/A/Ameba.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmebaXs>`
- `<$AmebaSm>`
- `<$AmebaMd>`
- `<$AmebaLg>`





## Ameba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ameba
include('simpleicons-14/A/Ameba')

' renders the element
Ameba('Ameba', 'Ameba', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ameba
include('simpleicons-14/A/Ameba')

' renders the element
Ameba('Ameba', 'Ameba', 'an optional tech label', 'an optional description')
@enduml
```

