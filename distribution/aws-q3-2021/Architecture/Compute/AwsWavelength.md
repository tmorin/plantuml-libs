# AwsWavelength


```text
aws-q3-2021/Architecture/Compute/AwsWavelength
```

```text
include('aws-q3-2021/Architecture/Compute/AwsWavelength')
```



| Illustration | AwsWavelength | AwsWavelengthCard | AwsWavelengthGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Compute/AwsWavelength.png) | ![illustration for AwsWavelength](../../../aws-q3-2021/Architecture/Compute/AwsWavelength.Local.png) | ![illustration for AwsWavelengthCard](../../../aws-q3-2021/Architecture/Compute/AwsWavelengthCard.Local.png) | ![illustration for AwsWavelengthGroup](../../../aws-q3-2021/Architecture/Compute/AwsWavelengthGroup.Local.png) |




## AwsWavelength

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWavelength
include('aws-q3-2021/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelength('AwsWavelength', 'Aws Wavelength', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWavelength
include('aws-q3-2021/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelength('AwsWavelength', 'Aws Wavelength', 'an optional tech label')
@enduml
```

## AwsWavelengthCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWavelengthCard
include('aws-q3-2021/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthCard('AwsWavelengthCard', 'Aws Wavelength Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWavelengthCard
include('aws-q3-2021/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthCard('AwsWavelengthCard', 'Aws Wavelength Card', 'an optional description')
@enduml
```

## AwsWavelengthGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWavelengthGroup
include('aws-q3-2021/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthGroup('AwsWavelengthGroup', 'Aws Wavelength Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsWavelengthGroup
include('aws-q3-2021/Architecture/Compute/AwsWavelength')

' renders the element
AwsWavelengthGroup('AwsWavelengthGroup', 'Aws Wavelength Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

