# Virustotal


```text
simpleicons-8/V/Virustotal
```

```text
include('simpleicons-8/V/Virustotal')
```



| Illustration | Virustotal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Virustotal.png) | ![illustration for Virustotal](../../simpleicons-8/V/Virustotal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirustotalXs>`
- `<$VirustotalSm>`
- `<$VirustotalMd>`
- `<$VirustotalLg>`





## Virustotal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Virustotal
include('simpleicons-8/V/Virustotal')

' renders the element
Virustotal('Virustotal', 'Virustotal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virustotal
include('simpleicons-8/V/Virustotal')

' renders the element
Virustotal('Virustotal', 'Virustotal', 'an optional tech label', 'an optional description')
@enduml
```

