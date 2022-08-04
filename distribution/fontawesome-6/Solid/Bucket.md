# Bucket


```text
fontawesome-6/Solid/Bucket
```

```text
include('fontawesome-6/Solid/Bucket')
```



| Illustration | Bucket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bucket.png) | ![illustration for Bucket](../../fontawesome-6/Solid/Bucket.Local.png) |




## Bucket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bucket
include('fontawesome-6/Solid/Bucket')

' renders the element
Bucket('Bucket', 'Bucket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bucket
include('fontawesome-6/Solid/Bucket')

' renders the element
Bucket('Bucket', 'Bucket', 'an optional tech label', 'an optional description')
@enduml
```

