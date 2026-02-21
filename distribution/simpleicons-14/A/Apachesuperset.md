# Apachesuperset


```text
simpleicons-14/A/Apachesuperset
```

```text
include('simpleicons-14/A/Apachesuperset')
```



| Illustration | Apachesuperset |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachesuperset.png) | ![illustration for Apachesuperset](../../simpleicons-14/A/Apachesuperset.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachesupersetXs>`
- `<$ApachesupersetSm>`
- `<$ApachesupersetMd>`
- `<$ApachesupersetLg>`





## Apachesuperset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachesuperset
include('simpleicons-14/A/Apachesuperset')

' renders the element
Apachesuperset('Apachesuperset', 'Apachesuperset', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachesuperset
include('simpleicons-14/A/Apachesuperset')

' renders the element
Apachesuperset('Apachesuperset', 'Apachesuperset', 'an optional tech label', 'an optional description')
@enduml
```

