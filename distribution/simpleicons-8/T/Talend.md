# Talend


```text
simpleicons-8/T/Talend
```

```text
include('simpleicons-8/T/Talend')
```



| Illustration | Talend |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Talend.png) | ![illustration for Talend](../../simpleicons-8/T/Talend.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TalendXs>`
- `<$TalendSm>`
- `<$TalendMd>`
- `<$TalendLg>`





## Talend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Talend
include('simpleicons-8/T/Talend')

' renders the element
Talend('Talend', 'Talend', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Talend
include('simpleicons-8/T/Talend')

' renders the element
Talend('Talend', 'Talend', 'an optional tech label', 'an optional description')
@enduml
```

