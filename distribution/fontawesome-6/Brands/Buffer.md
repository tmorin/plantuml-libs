# Buffer


```text
fontawesome-6/Brands/Buffer
```

```text
include('fontawesome-6/Brands/Buffer')
```



| Illustration | Buffer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Buffer.png) | ![illustration for Buffer](../../fontawesome-6/Brands/Buffer.Local.png) |




## Buffer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Buffer
include('fontawesome-6/Brands/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Buffer
include('fontawesome-6/Brands/Buffer')

' renders the element
Buffer('Buffer', 'Buffer', 'an optional tech label')
@enduml
```

